using AdminPageFor4XGame.Server.Data.Models;
using MongoDB.Driver;

namespace AdminPageFor4XGame.Server.Business
{
    public class MongoDbService
    {
        private readonly IMongoCollection<BuildingType> _buildings;
        private readonly IMongoCollection<ConfigurationData> _configData;

        public MongoDbService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDb"));
            var database = client.GetDatabase("PanteonGames");
            _buildings = database.GetCollection<BuildingType>("BuildingTypes");
            _configData = database.GetCollection<ConfigurationData>("ConfigurationData");
        }

        public async Task<List<BuildingType>> GetBuildingsAsync()
        {
            return await _buildings.Find(Building => true).ToListAsync();
        }

        public async Task<List<ConfigurationData>> GetConfigDataAsync()
        {
            return await _configData.Find(Building => true).ToListAsync();
        }

        public async Task<bool> UpdateBuildingAsync(BuildingType updatedBuilding)
        {
            var filter = Builders<BuildingType>.Filter.Eq(b => b.Id, updatedBuilding.Id);
            var update = Builders<BuildingType>.Update
                .Set(b => b.BuildingTypes, updatedBuilding.BuildingTypes)
                .Set(b => b.IsAdded, updatedBuilding.IsAdded);

            var result = await _buildings.UpdateOneAsync(filter, update);

            return result.ModifiedCount > 0;
        }

        public async Task CreateConfigDataAsync(ConfigurationData configData)
        {
            await _configData.InsertOneAsync(configData);
        }
    }
}
