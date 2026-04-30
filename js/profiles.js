// ===============================
// Veloura Profiles (Your Images)
// ===============================

const allProfiles = [
  {
    name: "Doris",
    age: 24,
    location: "Lagos",
    image: "assets/images/doris.jpg"
  },
  {
    name: "Vivian",
    age: 22,
    location: "Abuja",
    image: "assets/images/vivian.jpg"
  },
  {
    name: "Gloria",
    age: 25,
    location: "Port Harcourt",
    image: "assets/images/gloria.jpg"
  },
  {
    name: "Helen",
    age: 23,
    location: "Ibadan",
    image: "assets/images/helen.jpg"
  },
  {
    name: "Patience",
    age: 26,
    location: "Lagos",
    image: "assets/images/patience.jpg"
  }
];


// ===============================
// Get user location
// ===============================
const userLocation = localStorage.getItem("userLocation") || "Lagos";


// ===============================
// Generate distance
// ===============================
function generateDistance(profileLocation) {
  if (profileLocation.toLowerCase() === userLocation.toLowerCase()) {
    return Math.floor(Math.random() * 5) + 1; // 1–5 km
  } else {
    return Math.floor(Math.random() * 50) + 10; // 10–60 km
  }
}


// ===============================
// Shuffle profiles
// ===============================
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


// ===============================
// Personalized profiles
// ===============================
function getPersonalizedProfiles() {
  let profiles = shuffle([...allProfiles]);

  return profiles.map(profile => {
    return {
      ...profile,
      distance: generateDistance(profile.location),
      isNearby: profile.location.toLowerCase() === userLocation.toLowerCase(),
      online: Math.random() > 0.3
    };
  });
    }
