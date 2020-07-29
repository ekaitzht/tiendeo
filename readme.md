# Backend

### Clone the project

```
git clone git@github.com:ekaitzht/tiendeo.git
```

### Run application

Prerequisite: you need to install docker in your operating system and git.

```
cd ./tiendeo/backend
docker build -t ekaitzht:backend .
```

Run the application

```
docker run ekaitzht:backend
```

### Run tests

```
 docker run -t ekaitzht:backend npm run test
```

### Notes

The first line of the input represents the flying area. Here is how I will interpret the input.

![github image 5](https://drive.google.com/uc?id=1VWCcKzsfIQR1RkunSXmX2X5S_Sc5tLn0)

If the input is "3 5", it indicates that the area is 0 to 3 in axis 'x' , and from 0 to 5 in the y axe.

# Frontend

### Run application

```
cd ../frontend
docker build -t ekaitzht:frontend .
```

```
docker run -it --rm  -v /app/node_modules -p 3000:3000 ekaitzht:frontend
```

Open your Chrome browser to http://localhost:3000
