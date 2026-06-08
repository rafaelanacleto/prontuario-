using Prontuario.Domain.Entities;

namespace Prontuario.Application.Patients;

public sealed record PatientDto(
    int Id,
    string Name,
    string Email,
    DateOnly DateOfBirth,
    string Cpf,
    string Phone,
    DateTime CreatedAt
);

public static class PatientMappings
{
    public static PatientDto AsDto(this Patient patient)
        => new(
            patient.Id,
            patient.Name,
            patient.Email,
            patient.DateOfBirth,
            patient.Cpf,
            patient.Phone,
            patient.CreatedAt);
}
