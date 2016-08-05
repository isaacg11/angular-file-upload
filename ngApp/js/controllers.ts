namespace app.Controllers {
  export class HomeController {
    public file;
    public productToSave;

    public pickFile () {
      this.filepickerService.pick({
        mimetype: 'image/*'
      }, this.fileUploaded.bind(this));
    }

    public fileUploaded(file) {
      this.file = file;
      this.productToSave.url = this.file.url;
      this.$scope.$apply();
    }

    constructor(private filepickerService, private $scope: ng.IScope) {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
