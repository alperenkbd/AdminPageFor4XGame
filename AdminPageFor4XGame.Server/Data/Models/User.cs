using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AdminPageFor4XGame.Server.Data.Models
{
    public class User : IdentityUser
    {
        public DateTime RegistrationDate { get; set; } = DateTime.Now;
    }
}
