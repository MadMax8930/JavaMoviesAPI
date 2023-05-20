## Spring Boot Movie Application

### DB
[MongoDB Atlas](https://www.mongodb.com/atlas/database) documentation 

### API 
[TheMovieDB API](https://developer.themoviedb.org/reference/intro/getting-started) documentation

service layer
data access layer
api layer

curl -i http://localhost:8080/api/v1/movies

= 1) model 2) controller 3) repository 4) service => db access methods (+ ref to repository)

### Repositories are of type Interface

### Autowired:  will let the framework know we want to instantiate this class for us
### Under Autowired: We need to initialize with a constructor or Autowired

### Two entities:
- Movies
- Reviews