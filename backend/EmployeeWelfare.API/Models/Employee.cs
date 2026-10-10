namespace EmployeeWelfare.API.Models;

public class Employee
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string EmployeeCode { get; set; } = string.Empty; // e.g. NB-20481
    public string Department { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public int Age { get; set; }
    public string Gender { get; set; } = string.Empty;
    public string FinancialResponsibility { get; set; } = "Low"; // Low, Moderate, High
    public string CaregivingResponsibility { get; set; } = "None"; // None, Occasional, Significant
    public int ClusterId { get; set; } = -1;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<Dependent> Dependents { get; set; } = new();
    public List<LifeEvent> LifeEvents { get; set; } = new();
    public List<Recommendation> Recommendations { get; set; } = new();
    public List<Notification> Notifications { get; set; } = new();
}