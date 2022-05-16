// / <reference types="cypress" />

class AdvertisementsPage {
  constructor(objectFactory) {
    this.objectFactory = objectFactory;
    this.adsId = "";
  }
  disabledSubmit(name, street, rooms) {
    // click on New Ad button
    cy.xpath(this.objectFactory.newButton).click();

    // enter all required details
    cy.xpath(this.objectFactory.adsData.name).type(name);
    cy.xpath(this.objectFactory.adsData.street).type(street);
    cy.xpath(this.objectFactory.adsData.rooms).type(rooms);

    // check if save button disabled
    cy.xpath(this.objectFactory.save).should("be.disabled");
  }
  createAds(name, street, rooms, price, status) {
    // click on New Ad button
    cy.xpath(this.objectFactory.newButton).click();

    // enter all required details
    cy.xpath(this.objectFactory.adsData.name).type(name);
    cy.xpath(this.objectFactory.adsData.street).type(street);
    cy.xpath(this.objectFactory.adsData.rooms).type(rooms);
    cy.xpath(this.objectFactory.adsData.price).type(price);
    if (status) {
      cy.xpath(this.objectFactory.adsData.status).click();
    }

    // click on Save
    cy.xpath(this.objectFactory.save).click();
  }
  validateNewAd(name = null, street = null, rooms = null) {
    cy.get("table")
      .contains("tr", name)
      .within(() => {
        cy.get("td").eq(0).contains(name);
        cy.get("td").eq(1).contains(street);
        cy.get("td").eq(2).contains(rooms);
      });
  }
  editAd(name, updatedName) {
    // click on matching row to navigate to edit screen
    cy.get("table")
      .contains("tr", name)
      .within(() => {
        cy.get("td").eq(0).click();
      });
    // edit data
    cy.xpath(this.objectFactory.adsData.name).clear().type(updatedName);

    // save
    cy.xpath(this.objectFactory.save).click();
  }

  postAd(name, street, rooms, price, status) {
    cy.request({
      method: "POST",
      url: `/api/advertisements`,
      headers: {
        accept: "application/json",
      },
      body: {
        name: name,
        street: street,
        rooms: rooms,
        price: price,
        status: status,
      },
    }).then((response) => {
      this.adsId = response.body._id;
      console.log(response);
      expect(response.status).to.eql(200);
      assert.isNotNull(response.body._id, "is not null");
    });
  }
  updateAd(updatedName) {
    cy.request({
      method: "PUT",
      url: `https://admin-advertisement.herokuapp.com/api/advertisements/${this.adsId}`,
      headers: {
        accept: "application/json",
      },
      body: {
        name: updatedName,
        _id: this.adsId,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body).to.eql(1);
    });
  }
}
export default AdvertisementsPage;
