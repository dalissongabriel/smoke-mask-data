import dataMask from "data-mask";

const LENGTH_LETTERS_TO_DISPLAY = 2;
const SMOKE_CHARACTER = '*';
const FIRST_WORD_INDEX = 0;

const GLOBAL_SETTINGS = {
  lengthLettersToDisplay: LENGTH_LETTERS_TO_DISPLAY,
  smokeCharacter: SMOKE_CHARACTER,
};

function _smoke(any) {
  if (typeof any === 'string') {
    return any
      .split(' ')
      .map( (stringChunck, index ) => {
        if (index === FIRST_WORD_INDEX) {
          return (new dataMask(stringChunck))
            .maskRight(
              stringChunck.length - GLOBAL_SETTINGS.lengthLettersToDisplay, 
              ' ',
              GLOBAL_SETTINGS.smokeCharacter)
        } else {
          return (new dataMask(stringChunck))
            .maskRight(
              stringChunck.length, 
              '', 
              GLOBAL_SETTINGS.smokeCharacter
            );
        }
      })
      .join(' ')
  }

  if (typeof any === 'number') {
    return (new dataMask(String(any)))
      .maskRight(
        String(any).length - GLOBAL_SETTINGS.lengthLettersToDisplay,
        ' ',
        GLOBAL_SETTINGS.smokeCharacter,
      )
  }

  if (typeof any === 'boolean') {
    return GLOBAL_SETTINGS.smokeCharacter.repeat(3);
  }
}


function _configure(newSmokeC) {
  GLOBAL_SETTINGS.smokeCharacter = newSmokeC;
}

function _smokeData(anyContent) {
  if (typeof anyContent === 'object' && !Array.isArray(anyContent)) {
    Object.keys(anyContent).forEach( anyKey => {
      if (typeof anyContent[anyKey] !== 'object') {
        anyContent[anyKey] = _smoke(anyContent[anyKey]);
      } else {
        anyContent[anyKey] = _smokeData(anyContent[anyKey]);
      }
    });
    return anyContent;

  } else if (Array.isArray(anyContent))  {
    return anyContent.map((anyElem) => _smokeData(anyElem));
  } else {
    return _smoke(anyContent);
  }
}

/**
 * 
 * @param {*} anyContent Can be an array or object or simple types as number, string or boolean. Required.
 * @param {string} smokeCharacter Set the character used to mask content. Optional. Default is '*'.
 * @returns any content masked with the smoke character.
 */
function smokeData( 
  anyContent, 
  smokeCharacter = GLOBAL_SETTINGS.smokeCharacter, 
) {
  _configure(smokeCharacter);
  return _smokeData(anyContent);
}

export default smokeData;