namespace EmployeeWelfare.API.Models;

public class WelfareProgram
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty; // Financial, Family, Health, Wellbeing
    public string Description { get; set; } = string.Empty;
    public string EligibilityCriteria { get; set; } = string.Empty;
    public string Benefits { get; set; } = string.Empty;
    public string HowToApply { get; set; } = string.Empty;

    public List<Recommendation> Recommendations { get; set; } = new();
}