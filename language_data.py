
class LanguageData:
    def __init__(self):
        self._supported_languages = self.load_supported_languages()

    def load_supported_languages(self):
        """
        Loads supported languages from a JSON file.

        Returns:
        - dict: Dictionary mapping language codes to language names.
        """
        supported_languages_file = 'supported_languages.json'  # Assuming the file is in the same directory
        with open(supported_languages_file, 'r') as f:
            supported_languages = json.load(f)
        return supported_languages

    def get_language_name(self, lang_code):
        """
        Retrieves the name of a language given its language code.

        Args:
        - lang_code (str): Language code.

        Returns:
        - str: Name of the language.
        """
        return self._supported_languages.get(lang_code)

    def get_language_code(self, lang_name):
        """
        Retrieves the code of a language given its name.

        Args:
        - lang_name (str): Name of the language.

        Returns:
        - str: Language code.
        """
        for code, name in self._supported_languages.items():
            if name.lower() == lang_name.lower():
                return code
        return None

    def get_supported_languages(self):
        """
        Retrieves a list of supported languages.

        Returns:
        - list: List of tuples containing language code and name pairs.
        """
        return list(self._supported_languages.items())

    def get_language_code(self, lang_name):
        """
        Retrieves the code of a language given its name.

        Args:
        - lang_name (str): Name of the language.

        Returns:
        - str: Language code.
        """
        for code, name in self._supported_languages.items():
            if name.lower() == lang_name.lower():
                return code
        return None

    def get_language_code(self, lang_name):
        """
        Retrieves the code of a language given its name.

        Args:
        - lang_name (str): Name of the language.

        Returns:
        - str: Language code.
        """
        for code, name in self._supported_languages.items():
            if name.lower() == lang_name.lower():
                return code
        return None
