const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
  //   image: {
  //     url: {
  //         type: String,
  //         default: "https://www.allinclusivist.com/images/resorts/hard-rock-hotel-riviera-maya/97a4d290.jpg",
  //         set: (v) => v === "" 
  //          ? "https://www.allinclusivist.com/images/resorts/hard-rock-hotel-riviera-maya/97a4d290.jpg"
  //           : v, 
  //     },
  //     filename: {
  //         type: String,
  //         default: "wanderlust"
  //     }
  // },
  image: {
    url: String,
    filename: String
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }

  }, { timestamps: true });

  listingSchema.post("findOneAndDelete" , async (listing) => {
    if(!listing) {
      await Review.deleteMany({ _id: { $in: listing.reviews }});
    }
  });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;