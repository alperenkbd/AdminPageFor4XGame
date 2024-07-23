using AdminPageFor4XGame.Server.Data.Models;

namespace AdminPageFor4XGame.Server.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByUsernameAsync(string username);
        Task AddUserAsync(User user);
    }
}
