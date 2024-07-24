using AdminPageFor4XGame.Server.Business;
using AdminPageFor4XGame.Server.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminPageFor4XGame.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConfigDataController : Controller
    {
        private readonly MongoDbService _mongoDbService;

        public ConfigDataController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet("get")]
        public async Task<IActionResult> Get()
        {
            var configData = await _mongoDbService.GetConfigDataAsync();
            return Ok(configData);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateConfigData([FromBody] ConfigurationData configData)
        {
            if (configData == null)
                return BadRequest("Invalid data.");
            
            await _mongoDbService.CreateConfigDataAsync(configData);
            return Ok(new { Message = "configData created successfully" });
        }
    }
}
