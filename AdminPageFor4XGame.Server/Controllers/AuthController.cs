using AdminPageFor4XGame.Server.Data.Models;
using AdminPageFor4XGame.Server.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AdminPageFor4XGame.Server.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var result = await _signInManager.PasswordSignInAsync(loginDto.Username, loginDto.Password, false, false);
            if (result.Succeeded)
            {
                return Ok(new { message = "Success",status = StatusCode(200) });
            }
            return Unauthorized(new { message = "Unauthorized" });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            var user = new User { UserName = registerDto.Username, Email = registerDto.Email, EmailConfirmed=true };//Normally needed to add email confirmation step but we bypassed this process
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                return Ok(new { message = "Success", status = StatusCode(200) });
            }

            return BadRequest(result.Errors);
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok(new { message = "Success", status = StatusCode(200) });
        }

        [HttpOptions("login")]
        [HttpOptions("register")]
        [HttpOptions("logout")]
        public IActionResult Options()
        {
            return Ok(new { message = "Success", status = StatusCode(200) }); 
        }


    }
}
