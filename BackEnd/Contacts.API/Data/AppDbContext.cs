using Microsoft.EntityFrameworkCore;
using Contacts.API.Models;
using System.Linq;

namespace Contacts.API.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                Enumerable.Range(1, 10).Select(i => new Contact
                {
                    Id = i,
                    FullName = $"Test User {i}",
                    Email = $"user{i}@example.com",
                    PhoneNumber = $"99999{i:D5}",
                    Address = $"Address {i}"
                }).ToArray()
            );
        }
    }
}
