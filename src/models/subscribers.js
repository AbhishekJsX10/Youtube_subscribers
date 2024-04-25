const mongoose = require('mongoose');

const susbcriberSchema = new mongoose.Schema({
    channelName: {
        type: String,
        required: true,
    },
    subscribers: [
        {
            subscriber: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'channels'
            },
            subscribedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    subscriptions: [
        {
            channel: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'channels'
            },
            subscribedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    addedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber',susbcriberSchema);