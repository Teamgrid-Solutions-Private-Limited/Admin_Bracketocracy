import { validationMessagesForm } from "../../constants/FormOptionsConstants";

// Time to date

export const timeToDateConvert = (timeRecv) => {
  const d = new Date(parseInt(timeRecv));
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
};
export const formateDateConvert = (timeRecv) => {
  return (
    timeRecv.getFullYear() +
    "-" +
    (timeRecv.getMonth() + 1) +
    "-" +
    timeRecv.getDate()
  );
};

export const formateDateTimeConvert = (timeRecv) => {
  return (
    timeRecv.getFullYear() +
    "-" +
    (timeRecv.getMonth() + 1) +
    "-" +
    timeRecv.getDate() +
    " " +
    timeRecv.getHours() +
    ":" +
    timeRecv.getMinutes()
  );
};
export const formatDateTimeConvertAMPM = (timeRecv) => {
  // console.log(new Date("2024-2-2 15:30".replace(/-/g, "/")))
  let hours = timeRecv.getHours();
  let minutes = timeRecv.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

 

  return (
    timeRecv.getFullYear() +
    "-" +
    (timeRecv.getMonth() + 1) +
    "-" +
    timeRecv.getDate() +
    " " +
    strTime
  );
};

// Table Sorting Start

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

// Table Sorting End

// vALIDATION Start

export const validationCheckField = (fieldValue, fieldRules) => {
  var validation = [];

  validation.hasError = false;

  if (fieldRules.mandatory && fieldValue === "") {
    validation.errorMessage = validationMessagesForm.Mandatory_Text;

    validation.hasError = true;

    return validation;
  } else if (fieldRules.onlyNumber && isNaN(fieldValue)) {
    validation.errorMessage = validationMessagesForm.NumberRule_Text;

    validation.hasError = true;

    return validation;
  } else if (fieldRules.minlength && fieldValue.length < fieldRules.minlength) {
    validation.errorMessage =
      validationMessagesForm.Minlength_Text +
      fieldRules.minlength +
      " charecters !";

    validation.hasError = true;

    return validation;
  } else if (fieldRules.maxlength && fieldValue.length > fieldRules.maxlength) {
    validation.errorMessage =
      validationMessagesForm.Maxlength_Text +
      fieldRules.maxlength +
      " charecters !";

    validation.hasError = true;

    return validation;
  } else if (
    fieldRules.regexcheck ||
    fieldRules.indexcheck ||
    fieldRules.enterpriseID
  ) {
    // if (fieldRules.enterpriseID) {
    //   let regex = new RegExp("/^w+([-+.']w+)*$/");
    //   if (!regex.test(fieldValue)) {
    //     validation.errorMessage = validationMessagesForm.EnterpriseID_Text;
    //     validation.hasError = true;
    //     return validation;
    //   }
    // }
    // if (fieldRules.alphaNo) {
    //   let regexrule = new RegExp(/^[a-zA-Z\s]*$/);
    //   if (!regexrule.test(fieldValue)) {
    //     validation.errorMessage = validationMessagesForm.RegExAlphaNo_Text;
    //     validation.hasError = true;
    //     return validation;
    //   }
    // }
    // if (fieldRules.alphaNoChar) {
    //   let regexrule = new RegExp(/^[a-zA-Z0-9_ -/-:]*$/);
    //   if (!regexrule.test(fieldValue)) {
    //     validation.errorMessage =
    //       validationMessagesForm.RegExAlphaNoCharecter_Text;
    //     validation.hasError = true;
    //     return validation;
    //   }
    // }
  } else {
    // console.log("fieldValue.else",fieldValue.length)

    validation.errorMessage = "";

    return validation;
  }

  return validation;
};

// Validation End
