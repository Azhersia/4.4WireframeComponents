import './Animals.css'

export default function Animals() {
  return (
    <>
      <div id='animalPage'>
        <div id='leftSideAnimals'>
          <div id='filters'>
            <div id='dogFilter'>
              <input type="radio" name='animalType' id='dogRadio' value={'Dog'} />
              <label htmlFor="dogRadio">Dogs</label>
            </div>
            <div id='catFilter'>
              <input type="radio" name='animalType' id='catRadio' value={'Cat'} />
              <label htmlFor="catRadio">Cats</label>
            </div>
            <div id='otherFiler'>
              <input type="radio" name='animalType' id='otherRadio' value={'Other'} />
              <label htmlFor="otherRadio">Other</label>
            </div>
          </div>
        </div>
        <div id='rightSideAnimals'>
          text
        </div>
      </div>
    </>
  )
}
