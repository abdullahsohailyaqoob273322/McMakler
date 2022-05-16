import AdvertisementsPage from "../../framework/pageMethodFactory/Advertisements/AdvertisementsPage";
import advertisements from "../../framework/objectFactory/advertisements/advertisements";
import Common from "../../framework/pageMethodFactory/common/Common";
const adsData = require("../../fixtures/advertisements/advertisementsData");
const advertisementsPage = new AdvertisementsPage(advertisements);
const common = new Common();

context(`e2e`, () => {
  beforeEach("Login before each TestCase", () => {
    cy.visit("/advertisements");
  });
  it("Verify Save button is disabled when any of form input is empty", () => {
    advertisementsPage.disabledSubmit(
      adsData.name,
      adsData.street,
      adsData.rooms
    );
  });

  it("Verify User is able to create new Advertisement", () => {
    advertisementsPage.createAds(
      adsData.name,
      adsData.street,
      adsData.rooms,
      adsData.price,
      adsData.status
    );
  });
  it("Verify newly created Advertisement added in table", () => {
    advertisementsPage.validateNewAd(
      adsData.name,
      adsData.street,
      adsData.rooms
    );
  });
  it("Verify user can Edit any Advertisement", () => {
    advertisementsPage.editAd(adsData.name, adsData.updatedName);
  });
  it("Verify newly edited Advertisement reflected in table", () => {
    advertisementsPage.validateNewAd(
      adsData.updatedName,
      adsData.street,
      adsData.rooms
    );
  });
});

context(`API Tests`, () => {
  it("Verify and assert User is able to POST new Advertisement through API", () => {
    advertisementsPage.postAd(
      adsData.name,
      adsData.street,
      adsData.rooms,
      adsData.price,
      adsData.status
    );
  });
  it("Verify user can Edit any Advertisement", () => {
    advertisementsPage.updateAd(adsData.name, adsData.updatedName);
  });
});
