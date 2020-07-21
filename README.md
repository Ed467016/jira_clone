### Used APIs that must be developed and replaced in the client app

# JFI
All mock objects presented in 
```
/shared/utils/mock.data.json
```.
Replace ```api.mock.js``` usage with ```api.js``` in ```/shared/hooks/api/mutation.js``` and ```/shared/hooks/api/query.js```


# Endpoints

[/authentication/signIn](#)(POST)

description: 

Authenticates user

params: 

- email: string
- password: string

returns: 
```
{
  authToken: string
} 
```

[/currentUser](#)(GET)

description: 

Gets current logged in user

params: 

returns: 

```
{
  currentUser: {
    id: number,
    name: string,
    email: string,
    avatarUrl: string,
    createdAt: datetime,
    updatedAt: datetime,
    projectId: number
  }
}
```

[/project](#)(GET)

description:

Gets current project info

params: 

returns: 

```
{
  project: object -> {
    id: number,
    name: string,
    url: string,
    description: string,
    category: string,
    createdAt: datetime,
    updatedAt: datetime,
    issues: Array -> [{
      id: number,
      candidate: object -> {
        fullName: string,
        mobile: string,
        email: string,
      }
      status: string,
      createdAt: datetime,
      projectId: number
    }
  }
}
```

[/project/issue](#)(post)

description:

Creates new issue

notes:

Sends selected checks ids based on IssueCreate/config.json ids.

params: 

returns: 

```
{
  fullName: string,
  email: string,
  mobile: string,
  projectId: number,
  checkTypes: Array -> number
}
```
