import * as _ from "../../support/Objects/ObjectsCore";

describe("prevent duplicate column name in table", function () {
  before(() => {
    cy.fixture("tableNewDsl").then((val) => {
      _.agHelper.AddDsl(val);
    });
  });

  //todo(yash/tolu/pawan) reverting this test for now
  // it("evaluted value popup should show when focus on duplicate column input", function() {
  //   cy.openPropertyPane("tablewidget");
  //   // Updating the column name ; "id" > "TestUpdated"
  //   cy.tableColumnPopertyUpdate("id", "TestUpdated");
  //   // Updating the column name ; "email" > "TestUpdated"
  //   cy.tableColumnPopertyUpdate("email", "TestUpdated");
  //   cy.wait("@updateLayout");
  //   cy.get(commonlocators.evaluatedTypeTitle).should("exist");

  //   // Updating the column name ; "userName" > "TestUpdated2"
  //   // this will move focus of input to another column input and let popup close
  //   cy.tableColumnPopertyUpdate("userName", "TestUpdated2");

  //   // duplicate column's border should remain red
  //   cy.get("[data-rbd-draggable-id='email'] > div > div").should(
  //     "have.class",
  //     "has-duplicate-label",
  //   );
  // });

  afterEach(() => {
    // put your clean up code if any
  });
});
