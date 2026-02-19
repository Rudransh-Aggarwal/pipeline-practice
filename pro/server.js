const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://host.docker.internal", {})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

const Student = mongoose.model("Student", studentSchema);



app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


app.get("/students/:id", async (req, res) => {
  const student = await Student.findOne({ studentId: req.params.id });
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});


app.put("/students/:id", async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { studentId: req.params.id },
    req.body,
    { new: true }
  );

  if (!student) return res.status(404).json({ message: "Student not found" });

  res.json(student);
});


app.delete("/students/:id", async (req, res) => {
  const student = await Student.findOneAndDelete({ studentId: req.params.id });

  if (!student) return res.status(404).json({ message: "Student not found" });

  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("MongoDB server running on port 3000");
});
