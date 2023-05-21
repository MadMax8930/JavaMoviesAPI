::
@Data // getters & setters
@AllArgsConstructor // constructor that takes all these private field as argument
@NoArgsConstructor // constructor that takes no parameters

@DocumentReference // db store only ids of the review (manual ref relationship)
private List<Review> reviewIds;
::

CONTROLLER (api layer) -> endpoints creation using the Service Class ->task: GETTING THE REQUEST FROM USER AND RETURNING THE RESPONSE
(Fetching all the movies from the db and giving it back to the API layer)
---> Calls the findAllMovies method inside the Service, gets the list of the movie and returns them with http status Ok
(doesn't know what is inside the service class)

SERVICE (MOST OF OUR BUSINESS LOGIC WILL GO)  = talks to the db -> uses Repository Class
----> Get the list of the movies and returns to the API layer

REPOSITORY layer (data access layer for our API) ->task: Talking to the db and getting the data back

from terminal:
curl -i http://localhost:8080/api/v1/movies

= 1) model 2) controller 3) repository 4) service => db access methods (+ ref to repository)

### Repositories are of type Interface

### Templates for more complex stuff than a repo ->
// to farm a new dynamic query and do the job inside th db without using the repository

for review service:         
// 1. look for the movie with a given imdbId
// 2. Create a new review and associate it with the found movie

### Autowired:  will let the framework know we want to instantiate this class for us
### Under Autowired: We need to initialize with a constructor or Autowired

@PathVariable String imdbId)  passing the info we got in the mapping as a path variable