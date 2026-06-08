using Microsoft.EntityFrameworkCore;
using Prontuario.Domain.Entities;

namespace Prontuario.Application.Interfaces;

public interface IAppDbContext
{
    DbSet<Patient> Patients { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
