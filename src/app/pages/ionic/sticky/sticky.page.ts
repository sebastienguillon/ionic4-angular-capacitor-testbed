import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.page.html',
  styleUrls: ['./sticky.page.scss'],
})
export class StickyPage implements OnInit {
  countries = {};
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z'];

  constructor() { }

  ngOnInit() {
    this.countries['A'] = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
    ];

    this.countries['B'] = [
      'The Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',

    ];
    this.countries['C'] = [
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo, Democratic Republic of the',
      'Congo, Republic of the',
      'Costa Rica',
      'Côte d’Ivoire',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
    ];
    this.countries['D'] = [
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
    ];
    this.countries['E'] = [
      'East Timor (Timor-Leste)',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
    ];
    this.countries['F'] = [
      'Fiji',
      'Finland',
      'France',
    ];
    this.countries['G'] = [
      'Gabon',
      'The Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
    ];
    this.countries['H'] = [
      'Haiti',
      'Honduras',
      'Hungary',
    ];
    this.countries['I'] = [
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
    ];
    this.countries['J'] = [
      'Jamaica',
      'Japan',
      'Jordan',
    ];
    this.countries['K'] = [
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea, North',
      'Korea, South',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
    ];
    this.countries['L'] = [
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
    ];
    this.countries['M'] = [
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia, Federated States of',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar (Burma)',
    ];
    this.countries['N'] = [
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
    ];
    this.countries['O'] = [
      'Oman',
    ];
    this.countries['P'] = [
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
    ];
    this.countries['Q'] = [
      'Qatar',
    ];
    this.countries['R'] = [
      'Romania',
      'Russia',
      'Rwanda',
    ];
    this.countries['S'] = [
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Sudan, South',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
    ];
    this.countries['T'] = [
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
    ];
    this.countries['U'] = [
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
    ];
    this.countries['V'] = [
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
    ];
    this.countries['Y'] = [
      'Yemen',
    ];
    this.countries['Z'] = [
      'Zambia',
      'Zimbabwe',
    ];
  }
}
