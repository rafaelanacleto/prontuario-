namespace Prontuario.Domain.Entities;

public sealed class Patient
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateOnly DateOfBirth { get; set; }
    public string Cpf { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public void Update(string name, string email, DateOnly dateOfBirth, string cpf, string phone)
    {
        Name = name;
        Email = email;
        DateOfBirth = dateOfBirth;
        Cpf = cpf;
        Phone = phone;
    }
}
