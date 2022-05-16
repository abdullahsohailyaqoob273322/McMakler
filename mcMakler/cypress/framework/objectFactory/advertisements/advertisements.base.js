const advertisementsBase = {
  newButton: '//a[@href="/advertisement/new"]',
  adsData: {
    name: '//input[@name="name"]',
    street: '//input[@name="street"]',
    rooms: '//input[@name="rooms"]',
    price: '//input[@name="price"]',
    status: '//*[@aria-label="Status"]',
  },
  save: "(//button)[2]",
};

export default advertisementsBase;
