/*
Each result should include the following data:

Repo name
Repo owner's name
Link to the repo
Description
Number of stars
License

*/
export default class SearchResult {
	constructor(repoName, ownerName, repoLink, description, numStars, license) {
		this.repoName = repoName;
		this.ownerName = ownerName;
		this.repoLink = repoLink;
		this.description = description;
		this.numStars = numStars;
		this.license = license;
	}
}