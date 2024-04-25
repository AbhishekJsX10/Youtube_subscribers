
const express = require('express');
const router = express.Router();
const Subscriber = require("./models/subscribers");

// Your code goes here


// Routes

// route to display all channels
router.get("/allchannels", async(req, res) => {
    try {
      const allChannels = await Subscriber.find({});
      return res.status(200).json({
          data: allChannels
      })
    } catch (error) {
      res.status(500).json({
          message: "Error while fetching",
          error: error
      })
    }
  });
  
// route to add channel in existing list
router.post('/addChannel', async (req, res) => {
    try {
        const { channelName } = req.body;
        // Assuming 'channels' is your Mongoose model for channels
        await Subscriber.create({
            channelName: channelName,
            subscribers: [],
            subscriptions: []
        });

        const createdChannelDetails = await Subscriber.findOne({ channelName: channelName });
        // Assuming 'channels' is your Mongoose model for channels
        if (!createdChannelDetails) {
            return res.status(404).json({
                message: "Channel not found after creation"
            });
        }

        return res.status(200).json({
            message: "Channel created successfully",
            createdChannelDetails
        });
    } catch (error) {
        console.error("Error creating channel:", error);
        return res.status(500).json({
            message: "Error creating channel",
            error: error.message
        });
    }
});
// route to get all present channel names
router.get('/channelnames', async(req, res)=> {
    try {
        const allChannels = await Subscriber.find();
        const allNames = allChannels.map(channel => channel.channelName);
        res.status(200).json(allNames);
    } catch (error) {
        console.error('Error fetching channel names:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
  })
  
  
// subscribe functionality 
router.post('/subscribe/:channelId', async(req, res)=>{
    const { channelId } = req.params;
    const { targetChannelId } = req.body;
  
    try {
        const channel = await Subscriber.findById(channelId);
        const targetChannel = await Subscriber.findById(targetChannelId);
  
        if (!channel || !targetChannel) {
            return res.status(404).json({ message: 'Channel not found' });
        }
  
        // Subscribe the channel to the target channel with subscription date/time
        channel.subscriptions.push({
            channel: targetChannel._id,
            subscribedAt: new Date()
        });
        await channel.save();
  
        // Add the channel to the subscribers of the target channel with subscription date/time
        targetChannel.subscribers.push({
            subscriber: channel._id,
            subscribedAt: new Date()
        });
        await targetChannel.save();
  
        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  }
  )
  
  
// gives list of subscribers
router.get('/subscribers/:channelId', async (req, res) => {
    const { channelId } = req.params;
    try {
        const channel = await Subscriber.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }
        res.status(200).json(channel.subscribers);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
  
// gives list of subscribers that user subscribed
router.get('/subscriptions/:channelId', async (req, res) => {
    const { channelId } = req.params;
    try {
        const channel = await Subscriber.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: 'Channel not found' });
        }
        res.status(200).json(channel.subscriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

//Route to delete any particular channel
router.delete('/delete/:channelId', async(req, res)=>{
    try {
        const channelId = req.params.channelId;
        const deletedChannel = await Subscriber.findByIdAndDelete(channelId);
        if (!deletedChannel) {
            return res.status(404).json({
                error: 'Channel not found'
            });
        }
        res.status(200).json({
            message: 'Channel deleted successfully',
            deletedChannel
        });
    } catch (error) {
        console.error('Error deleting channel:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
  })
  
// route to update channel name  
router.put('/update/:channelId', async(req, res)=>{
    try {
        const channelId = req.params.channelId;
        const newName = req.body.channelName;
        const channel = await Subscriber.findById(channelId);
        if (!channel) {
            return res.status(404).json({
                message: 'Channel not found'
            });
        }
        channel.channelName = newName;
        const updatedChannel = await channel.save();
        res.status(200).json(updatedChannel);
    } catch (error) {
        console.error('Error updating channel name:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  );
  
  
// Handles all the unwanted request
router.use((req, res) => {
      res.status(404).json({ message: "Error - Route not found" }); 
  });
  

module.exports = router;

