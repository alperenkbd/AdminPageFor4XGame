using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace AdminPageFor4XGame.Server.Data.Models
{
    public class ConfigurationData
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [JsonProperty("id")]
        public string? Id { get; set; }

        [BsonElement("buildingType")]
        [JsonProperty("buildingType")]
        public string? BuildingTypes { get; set; }

        [BsonElement("buildingCost")]
        [JsonProperty("buildingCost")]
        public int? BuildingCost { get; set; }

        [BsonElement("constructionTime")]
        [JsonProperty("constructionTime")]
        public int? ConstructionTime { get; set; }

        
    }
}
