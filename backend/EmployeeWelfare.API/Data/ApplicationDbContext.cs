using Microsoft.EntityFrameworkCore;
using EmployeeWelfare.API.Models;

namespace EmployeeWelfare.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Employee> Employees { get; set; }
    public DbSet<Dependent> Dependents { get; set; }
    public DbSet<LifeEvent> LifeEvents { get; set; }
    public DbSet<WelfareProgram> WelfarePrograms { get; set; }
    public DbSet<Recommendation> Recommendations { get; set; }
    public DbSet<Notification> Notifications { get; set; }
    public DbSet<HRAdministrator> HRAdministrators { get; set; }
}