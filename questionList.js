{
  "identity" : [
    {
      "label" : "id0010",
      "text" : "First Name",
      "dataType": "string",
      "inputType" : "text",
      "validate" : "^[A-Za-z]+$",
      "cssClass" : "red"
      },{
      "label" : "id0020",
      "text" : "Middle Name",
      "dataType": "string",
      "inputType" : "text",
      "cssClass" : "red"
    },{
      "label" : "id0030",
      "text" : "Last Name",
      "dataType": "string",
      "inputType" : "text"
    },{
      "label" : "id0040",
      "text" : "Suffix",
      "dataType": "string",
      "inputType" : "text",
      "answerOptions" : [
        "Sr",
        "jr",
        "III",
        "IV"
      ]
    },{
      "label" : "meta",
      "required" : ["id0010", "id0030", { "id0050" : "False" }],
      "layout" : "span7 text-right bold"
    }
  ]
}