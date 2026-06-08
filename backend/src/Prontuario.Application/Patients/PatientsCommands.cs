using MediatR;

namespace Prontuario.Application.Patients;

public sealed class CreatePatientCommand : IRequest<PatientDto>
{
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public DateOnly DateOfBirth { get; init; }
    public string Cpf { get; init; } = string.Empty;
    public string Phone { get; init; } = string.Empty;
}

public sealed class UpdatePatientCommand : IRequest<PatientDto?>
{
    public int Id { get; init; }
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public DateOnly DateOfBirth { get; init; }
    public string Cpf { get; init; } = string.Empty;
    public string Phone { get; init; } = string.Empty;
}

public sealed class DeletePatientCommand : IRequest
{
    public int Id { get; init; }
}
