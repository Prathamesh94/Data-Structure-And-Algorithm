enum Singleton
{
    INSTANCE;
 
    private final Client dbClient;
     
    Singleton()
    {
        dbClient = Database.getClient();
    }
 
    public static Singleton getInstance()
    {
        return INSTANCE;
    }
 
    public Client getClient()
    {
        return dbClient;
    }
}