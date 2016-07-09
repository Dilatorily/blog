import Remarkable from 'remarkable';
import highlight from 'highlight.js';

export default new Remarkable({
    highlight: (str, language) => {
        if (language && highlight.getLanguage(language)) {
            try {
                return highlight.highlight(language, str).value;
            } catch (e) { /* empty */ }
        }

        try {
            return highlight.highlightAuto(str).value;
        } catch (e) { /* empty */ }

        return '';
    }
});
