using MediatR;
using Microsoft.EntityFrameworkCore;
using Prontuario.Application.Interfaces;
using Prontuario.Application.Patients;
using Prontuario.Domain.Entities;

namespace Prontuario.Infrastructure.Patients;

public sealed class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, List<PatientDto>>
{
    private readonly IAppDbContext _context;

    public GetAllPatientsQueryHandler(IAppDbContext context)
    {
        _context = context;
    }

    public async Task<List<PatientDto>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
    {
        return await _context.Patients
            .AsNoTracking()
            .Select(patient => patient.AsDto())
            .ToListAsync(cancellationToken);
    }
}

public sealed class GetPatientByIdQueryHandler : IRequestHandler<GetPatientByIdQuery, PatientDto?>
{
    private readonly IAppDbContext _context;

    public GetPatientByIdQueryHandler(IAppDbContext context)
    {
        _context = context;
    }

    public async Task<PatientDto?> Handle(GetPatientByIdQuery request, CancellationToken cancellationToken)
    {
        var patient = await _context.Patients
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        return patient?.AsDto();
    }
}

public sealed class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, PatientDto>
{
    private readonly IAppDbContext _context;

    public CreatePatientCommandHandler(IAppDbContext context)
    {
        _context = context;
    }

    public async Task<PatientDto> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
    {
        var patient = new Patient
        {
            Name = request.Name,
            Email = request.Email,
            DateOfBirth = request.DateOfBirth,
            Cpf = request.Cpf,
            Phone = request.Phone,
            CreatedAt = DateTime.UtcNow
        };

        _context.Patients.Add(patient);
        await _context.SaveChangesAsync(cancellationToken);

        return patient.AsDto();
    }
}

public sealed class UpdatePatientCommandHandler : IRequestHandler<UpdatePatientCommand, PatientDto?>
{
    private readonly IAppDbContext _context;

    public UpdatePatientCommandHandler(IAppDbContext context)
    {
        _context = context;
    }

    public async Task<PatientDto?> Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
    {
        var patient = await _context.Patients.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
        if (patient is null)
        {
            return null;
        }

        patient.Update(request.Name, request.Email, request.DateOfBirth, request.Cpf, request.Phone);
        await _context.SaveChangesAsync(cancellationToken);

        return patient.AsDto();
    }
}

public sealed class DeletePatientCommandHandler : IRequestHandler<DeletePatientCommand>
{
    private readonly IAppDbContext _context;

    public DeletePatientCommandHandler(IAppDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(DeletePatientCommand request, CancellationToken cancellationToken)
    {
        var patient = await _context.Patients.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
        if (patient is not null)
        {
            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync(cancellationToken);
        }

        return Unit.Value;
    }
}
