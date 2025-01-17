const Listing = require("../models/listing.js");


module.exports.index =async (req,res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});

};

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!")
    }
    res.render("./listings/show.ejs" ,{listing});
};

// module.exports.createListing = async(req,res) => {
//     let url = req.file.path;
//     let filename = req.file.filename;

//     const newListing = new Listing(req.body.listing); 
//     newListing.owner = req.user._id;
//     newListing.image = {url, filename};
//     await newListing.save();
//     req.flash("success", "New Listing Added!!");
//     res.redirect("/listings");
// };


const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'opencage', 
  apiKey: 'GEOCODING_API_KEY'  // Replace with your actual API key
};

const geocoder = NodeGeocoder(options);


module.exports.getLocationData = async (cityName) => {
    try {
      console.log('Fetching location data for:', cityName);
      
      const res = await geocoder.geocode(cityName);
      
      if (!Array.isArray(res) || res.length === 0) {  // Ensure res is an array before accessing
        console.log('No data found for the given city.');
      } else {
        const locationData = res[0];
        console.log('Longitude:', locationData.longitude);
        console.log('Latitude:', locationData.latitude);
      }
    } catch (error) {
      console.error('Failed to fetch location data:', error.message);
    }
  };
  





module.exports.renderEditForm = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!")
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("upload", "upload/w_200");

    res.render("./listings/edit.ejs" ,{listing, originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
    
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing });

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {url, filename};
        await listing.save();
    }

    req.flash("success", "Listing Updated!!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings");
};