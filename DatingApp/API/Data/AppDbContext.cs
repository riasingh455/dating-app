// using API.Entities
using Microsoft.EntityFrameworkCore;

// Database context: connects app to database and manages data access
// DbSet<AppUser> = Users table (AppUser objects map to rows)

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
}
