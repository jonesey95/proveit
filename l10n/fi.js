/**
 * Localization to Finnish of the ProveIt gadget
 */

window.proveit = {};

proveit.templates = {
	'Verkkoviite': {
		'url':                  { label: 'Osoite', type: 'url', required: true },
		'title':                { label: 'Otsikko', required: true },
		'date':                 { label: 'Display authors?', type: 'date', hidden: true },
		'accessdate':           { label: 'Luettu', type: 'date' },
		'website':              { label: 'Sivusto', hidden: true },
		'publisher':            { label: 'Julkaisija' },
		'last':                 { label: 'Sukunimi' },
		'last1':                { label: 'Sukunimi (tekijä 1)', hidden: true },
		'last2':                { label: 'Sukunimi (tekijä 2)', hidden: true },
		'last3':                { label: 'Sukunimi (tekijä 3)', hidden: true },
		'last4':                { label: 'Sukunimi (tekijä 4)', hidden: true },
		'last5':                { label: 'Sukunimi (tekijä 5)', hidden: true },
		'last6':                { label: 'Sukunimi (tekijä 6)', hidden: true },
		'last7':                { label: 'Sukunimi (tekijä 7)', hidden: true },
		'last8':                { label: 'Sukunimi (tekijä 8)', hidden: true },
		'last9':                { label: 'Sukunimi (tekijä 9)', hidden: true },
		'first':                { label: 'Etunimi' },
		'first1':               { label: 'Etunimi (tekijä 1)', hidden: true },
		'first2':               { label: 'Etunimi (tekijä 2)', hidden: true },
		'first3':               { label: 'Etunimi (tekijä 3)', hidden: true },
		'first4':               { label: 'Etunimi (tekijä 4)', hidden: true },
		'first5':               { label: 'Etunimi (tekijä 5)', hidden: true },
		'first6':               { label: 'Etunimi (tekijä 6)', hidden: true },
		'first7':               { label: 'Etunimi (tekijä 7)', hidden: true },
		'first8':               { label: 'Etunimi (tekijä 8)', hidden: true },
		'first9':               { label: 'Etunimi (tekijä 9)', hidden: true },
		'author':               { label: 'Tekijä', hidden: true },
		'authors':              { label: 'Authors', hidden: true },
		'author-link':          { label: 'Tekijästä kertova sivu', hidden: true },
		'author-link1':         { label: 'Tekijästä kertova sivu 1', hidden: true },
		'author-link2':         { label: 'Tekijästä kertova sivu 2', hidden: true },
		'author-link3':         { label: 'Tekijästä kertova sivu 3', hidden: true },
		'author-link4':         { label: 'Tekijästä kertova sivu 4', hidden: true },
		'author-link5':         { label: 'Tekijästä kertova sivu 5', hidden: true },
		'author-link6':         { label: 'Tekijästä kertova sivu 6', hidden: true },
		'author-link7':         { label: 'Tekijästä kertova sivu 7', hidden: true },
		'author-link8':         { label: 'Tekijästä kertova sivu 8', hidden: true },
		'author-link9':         { label: 'Tekijästä kertova sivu 9', hidden: true },
		'author-mask':          { label: 'Replaces the name of the author', hidden: true },
		'author-name-seprator': { label: 'Separator between first and last names', hidden: true },
		'author-seprator':      { label: 'Separator between authors', hidden: true },
		'lastauthoramp':        { label: 'Ampersand between the last authors?', hidden: true },
		'display-authors':      { label: 'Display authors?', hidden: true },
		'others':               { label: 'Tekijät', hidden: true },
		'month':                { label: 'Kuukausi', hidden: true },
		'year':                 { label: 'Vuosi' },
		'origyear':             { label: 'Original year', hidden: true },
		'editor':               { label: 'Toimittaja', hidden: true },
		'editor-last':          { label: 'Editors last name', hidden: true },
		'editor-first':         { label: 'Editors first name', hidden: true },
		'editor-link':          { label: 'Editors article', hidden: true },
		'series':               { label: 'Sarja', hidden: true },
		'location':             { label: 'Paikka' },
		'publication-place':    { label: 'Julkaisupaikka', hidden: true },
		'publication-date':     { label: 'Julkaisuvuosi', hidden: true },
		'page':                 { label: 'Sivu', hidden: true },
		'pages':                { label: 'Sivuja' },
		'nopp':                 { label: 'No pp?', hidden: true },
		'at':                   { label: 'Ats', hidden: true },
		'language':             { label: 'Kieli', hidden: true },
		'trans_title':          { label: 'Translated title', hidden: true },
		'chapter':              { label: 'Luku', hidden: true },
		'trans_chapter':        { label: 'Translated chapter title', hidden: true },
		'chapter-url':          { label: 'Luku osoite', hidden: true },
		'type':                 { label: 'Tyyppi', hidden: true },
		'format':               { label: 'Muoto', hidden: true },
		'arxiv':                { label: 'arXiv identifier', hidden: true },
		'asin':                 { label: 'ASIN', hidden: true },
		'asin-tld':             { label: 'ASIN TLD', hidden: true },
		'bibcode':              { label: 'Bibcode', hidden: true },
		'doi':                  { label: 'Digital Object Identifier', hidden: true },
		'doi_brokendate':       { label: 'DOI broken date', hidden: true },
		'issn':                 { label: 'International Standard Serial Number', hidden: true },
		'jfm':                  { label: 'Jahrbuch über die Fortschritte der Mathematik classification code', hidden: true },
		'jstor':                { label: 'JSTOR', hidden: true },
		'lccn':                 { label: 'Library of Congress Control Number', hidden: true },
		'mr':                   { label: 'Mathematical Reviews identifier', hidden: true },
		'oclc':                 { label: 'Online Computer Library Center number', hidden: true },
		'ol':                   { label: 'Open Library identifier', hidden: true },
		'osti':                 { label: 'Office of Scientific and Technical Information identifier', hidden: true },
		'pmc':                  { label: 'PubMed Center article number', hidden: true },
		'pmid':                 { label: 'PubMed Unique Identifier', hidden: true },
		'rfc':                  { label: 'Request for Comments number', hidden: true },
		'ssrn':                 { label: 'Social Science Research Network', hidden: true },
		'zbl':                  { label: 'Zentralblatt MATH journal identifier', hidden: true },
		'id':                   { label: 'Other unique identifier', hidden: true },
		'archiveurl':           { label: 'Arkiston osoite', hidden: true },
		'archivedate':          { label: 'Arkistointipäivämäärä', hidden: true },
		'deadurl':              { label: 'Dead URL?', hidden: true },
		'quote':                { label: 'Quoted text', hidden: true },
		'ref':                  { label: 'Anchor identifier', hidden: true },
		'separator':            { label: 'Separator for the list of authors', hidden: true },
		'postscript':           { label: 'Closing punctuation for the citation', hidden: true },
		'layurl':               { label: 'Link to a summary', hidden: true },
		'laydate':              { label: 'Date of the summary', hidden: true },
		'laysource':            { label: 'Source of the summary', hidden: true },
		'subscription':         { label: 'Subscription required?', hidden: true },
		'registration':         { label: 'Registration required?' }
	},
	'Kirjaviite': {
		'title':                { label: 'Otsikko', required: true },
		'url':                  { label: 'Osoite', type: 'url' },
		'last':                 { label: 'Sukunimi' },
		'last1':                { label: 'Sukunimi (tekijä 1)', hidden: true },
		'last2':                { label: 'Sukunimi (tekijä 2)', hidden: true },
		'last3':                { label: 'Sukunimi (tekijä 3)', hidden: true },
		'last4':                { label: 'Sukunimi (tekijä 4)', hidden: true },
		'last5':                { label: 'Sukunimi (tekijä 5)', hidden: true },
		'last6':                { label: 'Sukunimi (tekijä 6)', hidden: true },
		'last7':                { label: 'Sukunimi (tekijä 7)', hidden: true },
		'last8':                { label: 'Sukunimi (tekijä 8)', hidden: true },
		'last9':                { label: 'Sukunimi (tekijä 9)', hidden: true },
		'first':                { label: 'Etunimi' },
		'first1':               { label: 'Etunimi (tekijä 2)', hidden: true },
		'first2':               { label: 'Etunimi (tekijä 2)', hidden: true },
		'first3':               { label: 'Etunimi (tekijä 3)', hidden: true },
		'first4':               { label: 'Etunimi (tekijä 4)', hidden: true },
		'first5':               { label: 'Etunimi (tekijä 5)', hidden: true },
		'first6':               { label: 'Etunimi (tekijä 6)', hidden: true },
		'first7':               { label: 'Etunimi (tekijä 7)', hidden: true },
		'first8':               { label: 'Etunimi (tekijä 8)', hidden: true },
		'first9':               { label: 'Etunimi (tekijä 9)', hidden: true },
		'author':               { label: 'Tekijä', hidden: true },
		'authors':              { label: 'Authors', hidden: true },
		'author-link':          { label: 'Tekijästä kertova sivu', hidden: true },
		'author-link1':         { label: 'Tekijästä kertova sivu 1', hidden: true },
		'author-link2':         { label: 'Tekijästä kertova sivu 2', hidden: true },
		'author-link3':         { label: 'Tekijästä kertova sivu 3', hidden: true },
		'author-link4':         { label: 'Tekijästä kertova sivu 4', hidden: true },
		'author-link5':         { label: 'Tekijästä kertova sivu 5', hidden: true },
		'author-link6':         { label: 'Tekijästä kertova sivu 6', hidden: true },
		'author-link7':         { label: 'Tekijästä kertova sivu 7', hidden: true },
		'author-link8':         { label: 'Tekijästä kertova sivu 8', hidden: true },
		'author-link9':         { label: 'Tekijästä kertova sivu 9', hidden: true },
		'author-mask':          { label: 'Replaces the name of the author', hidden: true },
		'author-name-seprator': { label: 'Separator between first and last names', hidden: true },
		'author-seprator':      { label: 'Separator between authors', hidden: true },
		'lastauthoramp':        { label: 'Ampersand between the last authors?', hidden: true },
		'display-authors':      { label: 'Display authors?', hidden: true },
		'date':                 { label: 'Julkaisupäivä', hidden: true },
		'work':                 { label: 'Työ', hidden: true },
		'publisher':            { label: 'Julkaisija' },
		'accessdate':           { label: 'Luettu' },
		'others':               { label: 'Tekijät', hidden: true },
		'year':                 { label: 'Vuosi' },
		'origyear':             { label: 'Original year', hidden: true },
		'isbn':                 { label: 'ISBN' },
		'editor':               { label: 'Toimittaja', hidden: true },
		'editor-last':          { label: 'Editors last name', hidden: true },
		'editor-first':         { label: 'Editors first name', hidden: true },
		'editor-link':          { label: 'Editors article', hidden: true },
		'edition':              { label: 'Painos', hidden: true },
		'series':               { label: 'Sarja', hidden: true },
		'volume':               { label: 'Vuosikerta', hidden: true },
		'location':             { label: 'Paikka' },
		'publication-place':    { label: 'Julkaisupaikka', hidden: true },
		'publication-date':     { label: 'Julkaisuvuosi', hidden: true },
		'page':                 { label: 'Sivu', hidden: true },
		'pages':                { label: 'Sivuja' },
		'nopp':                 { label: 'No pp?', hidden: true },
		'at':                   { label: 'Ats', hidden: true },
		'language':             { label: 'Kieli', hidden: true },
		'trans_title':          { label: 'Translated title', hidden: true },
		'chapter':              { label: 'Luku', hidden: true },
		'trans_chapter':        { label: 'Translated chapter title', hidden: true },
		'chapter-url':          { label: 'Luku osoite', hidden: true },
		'type':                 { label: 'Tyyppi', hidden: true },
		'format':               { label: 'Muoto', hidden: true },
		'arxiv':                { label: 'arXiv identifier', hidden: true },
		'asin':                 { label: 'ASIN', hidden: true },
		'asin-tld':             { label: 'ASIN TLD', hidden: true },
		'bibcode':              { label: 'Bibcode', hidden: true },
		'doi':                  { label: 'Digital Object Identifier', hidden: true },
		'doi_brokendate':       { label: 'DOI broken date', hidden: true },
		'issn':                 { label: 'International Standard Serial Number', hidden: true },
		'jfm':                  { label: 'Jahrbuch über die Fortschritte der Mathematik classification code', hidden: true },
		'jstor':                { label: 'JSTOR', hidden: true },
		'lccn':                 { label: 'Library of Congress Control Number', hidden: true },
		'mr':                   { label: 'Mathematical Reviews identifier', hidden: true },
		'oclc':                 { label: 'Online Computer Library Center number', hidden: true },
		'ol':                   { label: 'Open Library identifier', hidden: true },
		'osti':                 { label: 'Office of Scientific and Technical Information identifier', hidden: true },
		'pmc':                  { label: 'PubMed Center article number', hidden: true },
		'pmid':                 { label: 'PubMed Unique Identifier', hidden: true },
		'rfc':                  { label: 'Request for Comments number', hidden: true },
		'ssrn':                 { label: 'Social Science Research Network', hidden: true },
		'zbl':                  { label: 'Zentralblatt MATH journal identifier', hidden: true },
		'id':                   { label: 'Other unique identifier', hidden: true },
		'archiveurl':           { label: 'Arkiston osoite', hidden: true },
		'archivedate':          { label: 'Arkistointipäivämäärä', hidden: true },
		'deadurl':              { label: 'Dead URL?', hidden: true },
		'quote':                { label: 'Quoted text', hidden: true },
		'ref':                  { label: 'Anchor identifier', hidden: true },
		'separator':            { label: 'Separator for the list of authors', hidden: true },
		'postscript':           { label: 'Closing punctuation for the citation', hidden: true },
		'layurl':               { label: 'Link to a summary', hidden: true },
		'laydate':              { label: 'Date of the summary', hidden: true },
		'laysource':            { label: 'Source of the summary', hidden: true }
	},
	'Cite encyclopedia': {
		'title':        { label: 'Otsikko', required: true },
		'encyclopedia': { label: 'Tietosanakirja', required: true },
		'last':         { label: 'Sukunimi', hidden: true },
		'first':        { label: 'Etunimi', hidden: true },
		'publisher':    { label: 'Julkaisija', hidden: true },
		'location':     { label: 'Paikka', hidden: true },
		'year':         { label: 'Vuosi', hidden: true },
		'url':          { label: 'Osoite', hidden: true },
		'accessdate':   { label: 'Luettu' }
	},
	'Lehtiviite': {
		'title':      { label: 'Otsikko', required: true },
		'last':       { label: 'Sukunimi' },
		'first':      { label: 'Etunimi' },
		'date':       { label: 'Julkaisupäivä' },
		'journal':    { label: 'Aikakauslehti' },
		'publisher':  { label: 'Julkaisija' },
		'volume':     { label: 'Vuosikerta' },
		'issue':      { label: 'Numero' },
		'pages':      { label: 'Sivuja' },
		'url':        { label: 'Osoite' },
		'accessdate': { label: 'Luettu' }
	},
	'Cite news': {
		'title':      { label: 'Otsikko', required: true },
		'last':       { label: 'Sukunimi' },
		'first':      { label: 'Etunimi' },
		'date':       { label: 'Julkaisupäivä' },
		'newspaper':  { label: 'Sanomalehti' },
		'location':   { label: 'Paikka' },
		'publisher':  { label: 'Julkaisija' },
		'url':        { label: 'Osoite' },
		'accessdate': { label: 'Luettu' }
	},
	'Cite newsgroup': {
		'title':      { label: 'Otsikko', required: true },
		'author':     { label: 'Tekijä' },
		'date':       { label: 'Julkaisupäivä' },
		'newsgroup':  { label: 'Uutisryhmä' },
		'id':         { label: 'Identifier' },
		'url':        { label: 'Osoite' },
		'accessdate': { label: 'Luettu' }
	},
	'Cite press release': {
		'title':        { label: 'Otsikko' },
		'last':         { label: 'Sukunimi' },
		'first':        { label: 'Etunimi' },
		'authorlink':   { label: 'Tekijä article' },
		'date':         { label: 'Julkaisupäivä' },
		'editor':       { label: 'Toimittaja', hidden: true },
		'editor-last':  { label: 'Editor last name', hidden: true },
		'editor-first': { label: 'Editor first name', hidden: true },
		'editor-link':  { label: 'Editor article', hidden: true },
		'trans_title':  { label: 'Translated title', hidden: true },
		'url':          { label: 'Osoite' },
		'deadurl':      { label: 'Dead URL?', hidden: true },
		'format':       { label: 'Muoto', hidden: true },
		'type':         { label: 'Tyyppi', hidden: true },
		'language':     { label: 'Kieli' },
		'others':       { label: 'Others', hidden: true },
		'location':     { label: 'Paikka' },
		'publisher':    { label: 'Julkaisija', hidden: true },
		'agency':       { label: 'Edustaja', hidden: true },
		'page':         { label: 'Sivu', hidden: true },
		'pages':        { label: 'Sivuja' },
		'at':           { label: 'Ats', hidden: true },
		'id':           { label: 'Identifier', hidden: true },
		'archiveurl':   { label: 'Arkiston osoite', hidden: true },
		'archivedate':  { label: 'Arkistointipäivämäärä', hidden: true },
		'accessdate':   { label: 'Luettu' },
		'via':          { label: 'Via', hidden: true },
		'registration': { label: 'Requires registration?', hidden: true },
		'subscription': { label: 'Requires subscription?', hidden: true },
		'quote':        { label: 'Lainaus' },
		'separator':    { label: 'Separator', hidden: true },
		'postscript':   { label: 'Postscript', hidden: true },
		'ref':          { label: 'Ref' }
	},
	'Cite conference': {
		'title':         { label: 'Otsikko' },
		'url':           { label: 'Osoite', type: 'url' },
		'first':         { label: 'Etunimi' },
		'last':          { label: 'Sukunimi' },
		'author':        { label: 'Tekijä', hidden: true },
		'authorlink':    { label: 'Tekijä article' },
		'date':          { label: 'Julkaisupäivä' },
		'year':          { label: 'Vuosi', hidden: true },
		'conference':    { label: 'Kokous' },
		'conferenceurl': { label: 'Kokous osoite' },
		'editor':        { label: 'Toimittaja', hidden: true },
		'others':        { label: 'Others', hidden: true },
		'volume':        { label: 'Vuosikerta', hidden: true },
		'edition':       { label: 'Painos', hidden: true },
		'booktitle':     { label: 'Jatko-osien otsikko', hidden: true },
		'publisher':     { label: 'Julkaisija', hidden: true },
		'archiveurl':    { label: 'Arkiston osoite', hidden: true },
		'archivedate':   { label: 'Arkistointipäivämäärä', hidden: true },
		'location':      { label: 'Paikka', hidden: true },
		'pages':         { label: 'Sivuja', hidden: true },
		'page':          { label: 'Sivu', hidden: true },
		'at':            { label: 'At', hidden: true },
		'format':        { label: 'Muoto', hidden: true },
		'id':            { label: 'Identifier', hidden: true },
		'isbn':          { label: 'ISBN', hidden: true },
		'bibcode':       { label: 'Bibcode', hidden: true },
		'oclc':          { label: 'OCLC', hidden: true },
		'doi':           { label: 'DOI', hidden: true },
		'accessdate':    { label: 'Luettu' },
		'quote':         { label: 'Lainaus', hidden: true },
		'ref':           { label: 'Ref', hidden: true },
		'separator':     { label: 'Separator', hidden: true },
		'postscript':    { label: 'Postscript', hidden: true },
		'language':      { label: 'Kieli' },
		'trans_title':   { label: 'Translated title' }
	},
	'Cite interview': {
		'title':       { label: 'Otsikko' },
		'subject':     { label: 'Otsikko' },
		'subjectlink': { label: 'Artikkelin otsikko' },
		'url':         { label: 'Osoite' },
		'first':       { label: 'Etunimi' },
		'last':        { label: 'Sukunimi' },
		'date':        { label: 'Julkaisupäivä' },
		'year':        { label: 'Vuosi', hidden: true },
		'month':       { label: 'Kuukausi', hidden: true },
		'type':        { label: 'Tyyppi', hidden: true },
		'format':      { label: 'Muoto', hidden: true },
		'program':     { label: 'Ohjelma' },
		'callsign':    { label: 'Call sign', hidden: true },
		'city':        { label: 'Kaupunki', hidden: true },
		'page':        { label: 'Sivu', hidden: true },
		'pages':       { label: 'Sivuja', hidden: true },
		'accessdate':  { label: 'Luettu' },
		'archiveurl':  { label: 'Arkiston osoite', hidden: true },
		'archivedate': { label: 'Arkistointipäivämäärä', hidden: true },
		'quote':       { label: 'Lainaus' }
	},
	'Cite AV media': {
		'people':      { label: 'Ihmiset' },
		'year':        { label: 'Vuosi' },
		'title':       { label: 'Otsikko' },
		'title_trans': { label: 'Title translation' },
		'medium':      { label: 'Tuotantomedia' },
		'language':    { label: 'Kieli' },
		'url':         { label: 'Osoite' },
		'accessdate':  { label: 'Luettu' },
		'archiveurl':  { label: 'Arkiston osoite', hidden: true },
		'archivedate': { label: 'Arkistointipäivämäärä', hidden: true },
		'format':      { label: 'Muoto' },
		'time':        { label: 'Aika' },
		'location':    { label: 'Paikka', hidden: true },
		'publisher':   { label: 'Julkaisija' },
		'quote':       { label: 'Lainaus' }
	},
	'Cite episode': {
		'title':         { label: 'Jakso', required: true },
		'episodelink':   { label: 'Jakson sivun nimi' },
		'url':           { label: 'Osoite' },
		'accessdate':    { label: 'Luettu' },
		'series':        { label: 'Sarja', required: true },
		'serieslink':    { label: 'Sarjan sivun nimi' },
		'network':       { label: 'Verkko' },
		'station':       { label: 'Asema' },
		'city':          { label: 'Kaupunki' },
		'date':          { label: 'Lähetyspäivä' },
		'began':         { label: 'Aloituspäivä' },
		'ended':         { label: 'Lopetuspäivä' },
		'season':        { label: 'Kauden numero' },
		'seriesno':      { label: 'Kauden numero' },
		'number':        { label: 'Numero' },
		'minutes':       { label: 'Minuutit' },
		'time':          { label: 'Aika' },
		'transcript':    { label: 'Puhtaaksi kirjoitettu teksti', hidden: true },
		'transcripturl': { label: 'Puhtaaksikirjoitetun osoite', hidden: true },
		'quote':         { label: 'Lainaus' },
		'language':      { label: 'Kieli' }
	}
};

proveit.messages = {
	'edit-tab': 'Edit',
	'add-tab': 'Add',
	'template-label': 'Template',
	'ref-name-label': '<ref> name',
	'add-field-button': 'Add field',
	'insert-button': 'Insert',
	'update-button': 'Update',
	'add-custom-param-button': 'Add custom parameter',
	'show-all-params-button': 'Show all the parameters',
	'no-references': 'No references found',
	'summary': 'Edited with ProveIt'
};

proveit.icons = {
	'Cite web': '//upload.wikimedia.org/wikipedia/commons/f/f0/Silk-Page_white_world.png',
	'Cite book': '//upload.wikimedia.org/wikipedia/commons/1/1e/Silk-Book.png',
	'Cite journal': '//upload.wikimedia.org/wikipedia/commons/f/f8/Silk-Page_white_text.png',
	'Cite news': '//upload.wikimedia.org/wikipedia/commons/3/32/Silk-Newspaper.png',
	'Cite newsgroup': '//upload.wikimedia.org/wikipedia/commons/5/5c/Silk-Comments.png',
	'Cite press release': '//upload.wikimedia.org/wikipedia/commons/b/bd/Silk-Transmit_blue.png',
	'Cite interview': '//upload.wikimedia.org/wikipedia/commons/f/f7/Silk-Telephone.png',
	'Cite episode': '//upload.wikimedia.org/wikipedia/commons/b/b2/Silk-Television.png',
	'Cite AV media': '//upload.wikimedia.org/wikipedia/commons/1/1a/Silk-film.png'
};