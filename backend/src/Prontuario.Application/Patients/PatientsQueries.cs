using MediatR;

namespace Prontuario.Application.Patients;

public sealed class GetAllPatientsQuery : IRequest<List<PatientDto>>
{
}

public sealed class GetPatientByIdQuery : IRequest<PatientDto?>
{
    public int Id { get; init; }
}
