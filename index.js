const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.log(deletedContact);
      break;

    case "update":
      const updateContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// ----------COMMANDER--------

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);

// -------yargs-------
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);

// invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
//   console.log(action);
// }

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });

// invokeAction({
//   action: "add",
//   name: "Anton",
//   email: "anton@gmail.com",
//   phone: "(186) 568-3720",
// });

// invokeAction({
//   action: "update",
//   id: "zQtC1TQRgRXTA62RXt13A",
//   name: "Anton",
//   email: "anton@gmail.com",
//   phone: "(186) 568-3720",
// });

// invokeAction({ action: "remove", id: "zQtC1TQRgRXTA62RXt13A" });
