module.exports = function (plop) {
  plop.addHelper('dotsToSlashes', function (words) {
    return words.replace(/\./g, '/')
  })

  plop.setGenerator('block', {
    description: 'generate an editable block',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'block name please',
      default: 'AdditionalData'
    }, {
      type: 'input',
      name: 'namespace',
      message: 'namespace please (hcm.people.profile.Z_HCM_PEP_PROFILE)',
      default: 'hcm.people.profile.Z_HCM_PEP_PROFILE'
    }],
    actions: [{
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/{{name}}.controller.js',
      templateFile: 'plop-templates/block/name.controller.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/{{name}}.view.xml',
      templateFile: 'plop-templates/block/name.view.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/{{name}}Block.js',
      templateFile: 'plop-templates/block/nameBlock.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/{{name}}Model.json',
      templateFile: 'plop-templates/block/nameModel.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/Edit{{name}}.controller.js',
      templateFile: 'plop-templates/block/Editname.controller.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/Edit{{name}}.view.xml',
      templateFile: 'plop-templates/block/Editname.view.hbs'
    }, {
      type: 'add',
      path: 'webapp/blocks/{{lowerCase name}}/Edit{{name}}Validation.js',
      templateFile: 'plop-templates/block/EditnameValidation.js'
    }]
  })
}