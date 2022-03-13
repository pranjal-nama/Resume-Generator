function addNewWEField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 3);
	newNode.setAttribute("placeholder", "Type here");

	let weOb = document.getElementById("we");
	let weAddButtonOb = document.getElementById("weAddButton");

	weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("aqField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows", 3);
	newNode.setAttribute("placeholder", "Type here");

	let aqOb = document.getElementById("aq");
	let aqAddButtonOb = document.getElementById("aqAddButton");

	aqOb.insertBefore(newNode, aqAddButtonOb);
}

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(
	".image-preview__default-text"
);

inpFile.addEventListener("change", function () {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();

		previewDefaultText.style.display = "none";
		previewImage.style.display = "block";

		reader.addEventListener("load", function () {
			previewImage.setAttribute("src", this.result);
		});

		reader.readAsDataURL(file);
	} else {
		previewDefaultText.style.display = null;
		previewImage.style.display = null;
		previewImage.setAttribute("src", "");
	}
});

const signInpFile = document.getElementById("signInpFile");
const previewCont = document.getElementById("signPreview");
const previewSign = previewCont.querySelector(".sign-preview__sign");
const previewDefText = previewCont.querySelector(".sign-preview__default-text");

signInpFile.addEventListener("change", function () {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();

		previewDefText.style.display = "none";
		previewSign.style.display = "block";

		reader.addEventListener("load", function () {
			previewSign.setAttribute("src", this.result);
		});

		reader.readAsDataURL(file);
	} else {
		previewDefText.style.display = null;
		previewSign.style.display = null;
		previewSign.setAttribute("src", "");
	}
});
