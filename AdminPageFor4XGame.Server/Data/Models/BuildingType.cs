using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AdminPageFor4XGame.Server.Data.Models
{
    public class BuildingType
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("buildingType")]
        public string BuildingTypes { get; set; }

        [BsonElement("isAdded")]
        public bool IsAdded { get; set; }
    }
}
