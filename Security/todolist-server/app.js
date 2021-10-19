require('dotenv').config();

const express = require('express')
const usersRouter = require('./routes/usersRoute')
const cors = require('cors');
const listRouter = require('./routes/listRoute');
const errorController = require('./controller/errorController')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const { users } = require('./models')
const multer = require('multer');
const { List } = require('./models')
const cloudinery = require('cloudinary').v2
const fs = require('fs')
const util = require('util')
// const { sequelize } = require('./models')

// sequelize.sync({ force: true });

const uploadPromise = util.promisify(cloudinery.uploader.upload)



//*config jwt strategy options
const options = {
  secretOrKey: process.env.JWT_SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

//*verify token and then if it success, it will execute callback function (payload, done)
//*and if it is invalid, it will send response with status 401 and message 
const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    console.log(`payload`, payload)
    const user = await users.findOne({ where: { id: payload.id } })
    if (!user) return done(null, false)
    //*done has 2 parameters err and user (req.user)
    done(null, user) //? req.user = 'Successful' and next();
  }
  catch (err) {
    done(err, false)
  }
})

//* apply strategy to passport
passport.use('jwt', jwtStrategy)


const app = express();
app.use(cors())
//*config multer (multerpart/form-data middleware)
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(`file`, file) //? fieldname originalname encoding mimetype
      cb(null, 'public/images') //? select storage folder
    },
    filename: (req, file, cb) => {
      cb(null, `${new Date().getTime()}.${file.mimetype.split('/')[1]}`) //? select file name
    }

  })
})
//*upload file to local disk
app.post('/upload', upload.single('thisisuploadinput'), async (req, res, next) => {
  try {
    console.log(`req.file`, req.file)
    await List.update({ imageUrl: req.file.path }, { where: { id: 50 } });
    res.json({ message: 'Upload is successful' })
  }
  catch (err) {
    next(err)
  }
})

//*upload file to cloud (cloudinery)
const uploadCloud = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(`file`, file) //? fieldname originalname encoding mimetype
      cb(null, 'public/images') //? select storage folder
    },
    filename: (req, file, cb) => {
      cb(null, `${new Date().getTime()}.${file.mimetype.split('/')[1]}`) //? select file name
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }

  })
})

app.post('/upload-to-cloud', uploadCloud.single('cloudinput'), async (req, res, next) => {
  try {
    console.log(`req.file`, req.file)
    const { username, password, confirmPassword, email } = req.body
    // cloudinery.uploader.upload(req.file.path, async (err, result) => {
    //   if (err) console.log(`err`, err)
    //   else console.log(`result`, result)
    //   fs.unlinkSync(req.file.path)
    //   await List.update({ imageUrl: result.secure_url }, { where: { id: 5 } })
    // })
    // const result = await uploadPromise(req.file.path)
    // await List.update({ imageUrl: result.secure_url }, { where: { id: 5 } })
    // fs.unlinkSync(req.file.path)
    // res.json({ message: 'uploaddddd' })


    const result = await uploadPromise(req.file.path)
    const user = await users.create({
      username,
      password: result.secure_url,
      email
    })
    console.log(`user`, user)
    fs.unlinkSync(req.file.path)
    res.json({ user })
  }
  catch (err) {
    next(err)
  }
})

app.use(passport.initialize()) //?initialize passport
app.get('/test-passport', passport.authenticate('jwt', { session: false }), (req, res) => { //? session base authenciation = remember client (old-version)
  res.json(req.user)
})


app.use(express.json())

app.use('/public', express.static('public'))
app.use('/', usersRouter)
app.use('/lists', listRouter)

app.use((req, res, next) => { //? handle path and method not found
  res.status(404).json({ message: 'this resource is not found' })
})

app.use(errorController);


const port = process.env.PORT || 9000; //? dotenv built data to process.env

app.listen(port, () => console.log(`Server is running on port ${port}`))