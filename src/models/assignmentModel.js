const mongoose = require("mongoose");
const submissionSchema = require('./submissionModel');

const assignmentSchema = mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    assignmentId: {
        required: true,
        type: String,
        trim: true,
    },
    assignmentName: {
        required: true,
        type: String,
        trim: true,
    },
    classCode: {
        required: true,
        type: String,
        trim: true,
    },
    dateTime: {
        required: true,
        type: String,
        trim: true,
    },
    dueDate: {
        required: true,
        type: String,
        trim: true,
    },
    fullMarks: {
        required: true,
        type: String,
        trim: true,
    },
    assignmentUrl: {
        required: true,
        type: String,
        trim: true,
    },
    studentId: {
        required: true,
        type: String,
        trim: true,
    },
    submission: {
        type: [mongoose.Schema.Types.Mixed],
        default: [
            {
                _id: {
                        type: String, 
                        required: true
                    },
                    submission: submissionSchema,
                },
        ],
    },
});

const AssignmentModel = mongoose.model("Assignment", assignmentSchema);
module.exports = AssignmentModel;