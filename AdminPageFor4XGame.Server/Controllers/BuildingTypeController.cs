using AdminPageFor4XGame.Server.Business;
using AdminPageFor4XGame.Server.Data.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace AdminPageFor4XGame.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BuildingTypeController : Controller
    {
        private readonly MongoDbService _mongoDbService;

        public BuildingTypeController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var buildings = await _mongoDbService.GetBuildingsAsync();
            return Ok(buildings);
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateBuilding([FromBody] BuildingType updatedBuilding)
        {
            var success = await _mongoDbService.UpdateBuildingAsync(updatedBuilding);

            if (success)
            {
                return Ok(new { Message = "Building updated successfully" });
            }
            else
            {
                return NotFound(new { Message = "Building not found" });
            }
        }
    }
}
