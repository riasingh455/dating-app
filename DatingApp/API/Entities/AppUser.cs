namespace API;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
}


// Think of entities as the core data objects of your app — they represent real things your system cares about and usually map directly to your database tables.