interface LeadData {
  name: string;
  phone: string;
  email: string;
  lead_source: string;
  language: string;
  source_language: string;
  ip: string;
  doctor: string;
  interest: string[];
  procedure: string[];
  utm_source: string;
  utm_medium: string;
  utm_keyword: string;
  utm_matchtype: string;
  utm_network: string;
  gclid: string;
  lead_source_detail: string;
}

interface CreateLeadProps {
  name: string;
  phone: string;
  email: string;
  lead: {
    LEAD_LANGUAGE: string;
    LEAD_DOCTOR: string;
  };
  procedure: string;
}

export const createLead = async (props: CreateLeadProps): Promise<any> => {
  try {
    const searchParm = new URLSearchParams(window.location.search);

    const utmSource = searchParm.get("utm_source");
    const utmMedium = searchParm.get("utm_medium");
    const utmKeyword = searchParm.get("utm_keyword");
    const utmMatchtype = searchParm.get("utm_matchtype");
    const utmNetwork = searchParm.get("utm_network");
    const gclid = searchParm.get("gclid");

    // Get IP address from hidden field if available
    const ipElement = document.querySelector("#LEADCF44") as HTMLInputElement;
    const ip = ipElement ? ipElement.value : "";

    const data: LeadData = {
      name: props.name,
      phone: props.phone,
      email: props.email,
      lead_source: "Google/Web Form/Crb",
      language: props.lead.LEAD_LANGUAGE,
      source_language: props.lead.LEAD_LANGUAGE,
      ip: ip,
      doctor: props.lead.LEAD_DOCTOR,
      interest: ["Hair Transplant"],
      procedure: [props.procedure],
      utm_source: utmSource ? utmSource : "",
      utm_medium: utmMedium ? utmMedium : "",
      utm_keyword: utmKeyword ? utmKeyword : "",
      utm_matchtype: utmMatchtype ? utmMatchtype : "",
      utm_network: utmNetwork ? utmNetwork : "",
      gclid: gclid ? gclid : "",
      lead_source_detail: "",
    };

    const response = await fetch(
      `https://zoho.hotelistan.net/api/form-patient`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const results = await response.json();
    return results;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { error: errorMessage, status: "fail" };
  }
};
  