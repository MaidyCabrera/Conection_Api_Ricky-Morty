const createCharacterElement = (character: {image:string; name:string}) => {
  const characterDiv = document.createElement('div');
  characterDiv.className = 'character';

  const viewImage = document.createElement('img');
  viewImage.src = character.image;

  const nameCharacter = document.createElement('p');
  nameCharacter.textContent = character.name;

  characterDiv.appendChild(viewImage);
  characterDiv.appendChild(nameCharacter);

  return characterDiv;
};

const getRickyMorty = async () => {
  try {
    const apiKey = 'https://rickandmortyapi.com/api';

    const response = await fetch(`${apiKey}/character`);
    const dataApi = await response.json();

    const characters = dataApi.results;
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'character-container';

    characters.forEach((character: { image: string, name: string }) => {
      const characterElement = createCharacterElement(character);
      imageContainer.appendChild(characterElement);
    });

  
    document.body.append(imageContainer)
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
  }
};

getRickyMorty();

const AddCharacter = () => {
  try {
    const urlInput = <HTMLInputElement>document.getElementById('url');
    const nameInput = <HTMLInputElement>document.getElementById('name');

    const newCharacter: { image: string; name: string } = {
      image: urlInput.value,
      name: nameInput.value,
    };

    const newCharacterDiv = createCharacterElement(newCharacter);

    const imageContainer = document.querySelector('.character-container');
    if (imageContainer) {
      imageContainer.appendChild(newCharacterDiv);
      newCharacterDiv.id = 'new-character'; 
      newCharacterDiv.scrollIntoView({ behavior: 'smooth' });
    }

    if (urlInput && nameInput) {
      urlInput.value = '';
      nameInput.value = '';
    }
  } catch (error) {
    console.error('Error al agregar nuevo personaje:', error);
  }
};