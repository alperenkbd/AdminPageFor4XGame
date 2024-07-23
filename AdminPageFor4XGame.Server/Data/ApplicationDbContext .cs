using AdminPageFor4XGame.Server.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Design;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }

}

//TO:DO sure wheter it is neccessary code block or not -- Author:AlperenKabadayı
public class YourDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
{
    public ApplicationDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
        optionsBuilder.UseMySql("Server=127.0.0.1;Database=panteongames;User=root;Password=Doshuhq.1967", new MySqlServerVersion(new Version(8, 0, 21)));
        //Do not forget to remove connection string from here 
        //TO:DO Create a new file that includes connectionString and get value from there -- Author:AlperenKabadayı

        return new ApplicationDbContext(optionsBuilder.Options);
    }
}