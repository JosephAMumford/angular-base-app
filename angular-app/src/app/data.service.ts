import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data : any = {
    "nodes": [
      {
        "display": "Arbor Day Merchandise ",
        "nodes": [
          {
            "display": " Cancel order",
            "fullDispositionCode": "Arbor Day Merchandise  -  Cancel order"
          },
          {
            "display": " Expedite order",
            "fullDispositionCode": "Arbor Day Merchandise  -  Expedite order"
          },
          {
            "display": " Free materials",
            "fullDispositionCode": "Arbor Day Merchandise  -  Free materials"
          },
          {
            "display": " Place / Change order",
            "fullDispositionCode": "Arbor Day Merchandise  -  Place / Change order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Arbor Day Merchandise  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Arbor Day Merchandise  -  Replace / Refund"
          },
          {
            "display": " Status of my order",
            "fullDispositionCode": "Arbor Day Merchandise  -  Status of my order"
          }
        ]
      },
      {
        "display": "Newsletter Premium ",
        "nodes": [
          {
            "display": " Cancel order",
            "fullDispositionCode": "Newsletter Premium  -  Cancel order"
          },
          {
            "display": " Place / Change order",
            "fullDispositionCode": "Newsletter Premium  -  Place / Change order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Newsletter Premium  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Newsletter Premium  -  Replace / Refund"
          },
          {
            "display": " Status of my order",
            "fullDispositionCode": "Newsletter Premium  -  Status of my order"
          }
        ]
      },
      {
        "display": "Carbon ",
        "nodes": [
          {
            "display": " Billing",
            "fullDispositionCode": "Carbon  -  Billing"
          },
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "Carbon  -  Cancel / Change order"
          },
          {
            "display": " Place order",
            "fullDispositionCode": "Carbon  -  Place order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Carbon  -  Questions"
          }
        ]
      },
      {
        "display": "Coffee ",
        "nodes": [
          {
            "display": " Billing",
            "fullDispositionCode": "Coffee  -  Billing"
          },
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "Coffee  -  Cancel / Change order"
          },
          {
            "display": " Place order",
            "fullDispositionCode": "Coffee  -  Place order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Coffee  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Coffee  -  Replace / Refund"
          },
          {
            "display": " Status of my order",
            "fullDispositionCode": "Coffee  -  Status of my order"
          }
        ]
      },
      {
        "display": "Contact Information ",
        "nodes": [
          {
            "display": " Change / Update",
            "fullDispositionCode": "Contact Information  -  Change / Update"
          }
        ]
      },
      {
        "display": "Credit card ",
        "nodes": [
          {
            "display": " Update card info",
            "fullDispositionCode": "Credit card  -  Update card info"
          }
        ]
      },
      {
        "display": "Donation ",
        "nodes": [
          {
            "display": " Community Tree Recovery",
            "fullDispositionCode": "Donation  -  Community Tree Recovery"
          },
          {
            "display": " General",
            "fullDispositionCode": "Donation  -  General"
          },
          {
            "display": " Living Pair of Trees",
            "fullDispositionCode": "Donation  -  Living Pair of Trees"
          },
          {
            "display": " Rain Forest Rescue (Deed)",
            "fullDispositionCode": "Donation  -  Rain Forest Rescue (Deed)"
          },
          {
            "display": " Trees to the Forest",
            "fullDispositionCode": "Donation  -  Trees to the Forest"
          }
        ]
      },
      {
        "display": "EST ",
        "nodes": [
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "EST  -  Cancel / Change order"
          },
          {
            "display": " Order / Reserve trees",
            "fullDispositionCode": "EST  -  Order / Reserve trees"
          },
          {
            "display": " Questions about Program / Trees",
            "fullDispositionCode": "EST  -  Questions about Program / Trees"
          },
          {
            "display": " Status / Shipping / Pick-up",
            "fullDispositionCode": "EST  -  Status / Shipping / Pick-up"
          },
          {
            "display": " Replace trees",
            "fullDispositionCode": "EST  -  Replace trees"
          },
          {
            "display": " Website issues / errors",
            "fullDispositionCode": "EST  -  Website issues / errors"
          }
        ]
      },
      {
        "display": "FTC ",
        "nodes": [
          {
            "display": " Cancel / Join / Renew / Order bulletins / Questions",
            "fullDispositionCode": "FTC  -  Cancel / Join / Renew / Order bulletins / Questions"
          }
        ]
      },
      {
        "display": "GAT cards ",
        "nodes": [
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "GAT cards  -  Cancel / Change order"
          },
          {
            "display": " Place order / Customize",
            "fullDispositionCode": "GAT cards  -  Place order / Customize"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "GAT cards  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "GAT cards  -  Replace / Refund"
          },
          {
            "display": " Status / Shipping / Expedite",
            "fullDispositionCode": "GAT cards  -  Status / Shipping / Expedite"
          }
        ]
      },
      {
        "display": "Gift Trees ",
        "nodes": [
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "Gift Trees  -  Cancel / Change order"
          },
          {
            "display": " Place order / Customize",
            "fullDispositionCode": "Gift Trees  -  Place order / Customize"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Gift Trees  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Gift Trees  -  Replace / Refund"
          },
          {
            "display": " Status / Shipping / Expedite",
            "fullDispositionCode": "Gift Trees  -  Status / Shipping / Expedite"
          }
        ]
      },
      {
        "display": "Hazelnut Project ",
        "nodes": [
          {
            "display": " Cancel order",
            "fullDispositionCode": "Hazelnut Project  -  Cancel order"
          },
          {
            "display": " Feedback / Join / Questions / Status / Survey",
            "fullDispositionCode": "Hazelnut Project  -  Feedback / Join / Questions / Status / Survey"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Hazelnut Project  -  Replace / Refund"
          }
        ]
      },
      {
        "display": "Membership ",
        "nodes": [
          {
            "display": " Calendar",
            "fullDispositionCode": "Membership  -  Calendar"
          },
          {
            "display": " Cancel",
            "fullDispositionCode": "Membership  -  Cancel"
          },
          {
            "display": " Join / Renew",
            "fullDispositionCode": "Membership  -  Join / Renew"
          },
          {
            "display": " Questions / Status / Already paid dues / Member card",
            "fullDispositionCode": "Membership  -  Questions / Status / Already paid dues / Member card"
          },
          {
            "display": " Reduce mail",
            "fullDispositionCode": "Membership  -  Reduce mail"
          },
          {
            "display": " Survey",
            "fullDispositionCode": "Membership  -  Survey"
          }
        ]
      },
      {
        "display": "Membership Trees ",
        "nodes": [
          {
            "display": " Cancel trees",
            "fullDispositionCode": "Membership Trees  -  Cancel trees"
          },
          {
            "display": " Change tree package",
            "fullDispositionCode": "Membership Trees  -  Change tree package"
          },
          {
            "display": " Color Code / Tree I.D.",
            "fullDispositionCode": "Membership Trees  -  Color Code / Tree I.D."
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Membership Trees  -  Replace / Refund"
          },
          {
            "display": " Shipping schedule / Expedite",
            "fullDispositionCode": "Membership Trees  -  Shipping schedule / Expedite"
          },
          {
            "display": " Status of my order",
            "fullDispositionCode": "Membership Trees  -  Status of my order"
          }
        ]
      },
      {
        "display": "Newsletter ",
        "nodes": [
          {
            "display": " Content questions / Feedback",
            "fullDispositionCode": "Newsletter  -  Content questions / Feedback"
          }
        ]
      },
      {
        "display": "Nursery ",
        "nodes": [
          {
            "display": " Bulk seedlings",
            "fullDispositionCode": "Nursery  -  Bulk seedlings"
          },
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "Nursery  -  Cancel / Change order"
          },
          {
            "display": " Expedite / Shipping schedule",
            "fullDispositionCode": "Nursery  -  Expedite / Shipping schedule"
          },
          {
            "display": " Place order",
            "fullDispositionCode": "Nursery  -  Place order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "Nursery  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "Nursery  -  Replace / Refund"
          },
          {
            "display": " Status of my order",
            "fullDispositionCode": "Nursery  -  Status of my order"
          },
          {
            "display": " Tree I.D.",
            "fullDispositionCode": "Nursery  -  Tree I.D."
          }
        ]
      },
      {
        "display": "Phone / Email interaction ",
        "nodes": [
          {
            "display": " Disconnect / Dropped",
            "fullDispositionCode": "Phone / Email interaction  -  Disconnect / Dropped"
          },
          {
            "display": " Escalation",
            "fullDispositionCode": "Phone / Email interaction  -  Escalation"
          },
          {
            "display": " Transferred",
            "fullDispositionCode": "Phone / Email interaction  -  Transferred"
          }
        ]
      },
      {
        "display": "Programs ",
        "nodes": [
          {
            "display": " Alliance for Community Trees",
            "fullDispositionCode": "Programs  -  Alliance for Community Trees"
          },
          {
            "display": " Community Tree Recovery",
            "fullDispositionCode": "Programs  -  Community Tree Recovery"
          },
          {
            "display": " Conferences",
            "fullDispositionCode": "Programs  -  Conferences"
          },
          {
            "display": " Rain Forest Rescue",
            "fullDispositionCode": "Programs  -  Rain Forest Rescue"
          },
          {
            "display": " Tree City / Campus / Line",
            "fullDispositionCode": "Programs  -  Tree City / Campus / Line"
          }
        ]
      },
      {
        "display": "Questions ",
        "nodes": [
          {
            "display": " Annuities / Bequests / Estates / Land / Wills",
            "fullDispositionCode": "Questions  -  Annuities / Bequests / Estates / Land / Wills"
          },
          {
            "display": " Corporate Partnerships",
            "fullDispositionCode": "Questions  -  Corporate Partnerships"
          },
          {
            "display": " Other",
            "fullDispositionCode": "Questions  -  Other"
          },
          {
            "display": " Referral external",
            "fullDispositionCode": "Questions  -  Referral external"
          },
          {
            "display": " Sweepstakes / Fast 50",
            "fullDispositionCode": "Questions  -  Sweepstakes / Fast 50"
          },
          {
            "display": " Tree I.D. (not an ADF tree)",
            "fullDispositionCode": "Questions  -  Tree I.D. (not an ADF tree)"
          },
          {
            "display": " Tree planting / Care",
            "fullDispositionCode": "Questions  -  Tree planting / Care"
          }
        ]
      },
      {
        "display": "Tax ",
        "nodes": [
          {
            "display": " Receipt / Tax ID # / W9",
            "fullDispositionCode": "Tax  -  Receipt / Tax ID # / W9"
          }
        ]
      },
      {
        "display": "TIC/TIM ",
        "nodes": [
          {
            "display": " Billing",
            "fullDispositionCode": "TIC/TIM  -  Billing"
          },
          {
            "display": " Cancel / Change order",
            "fullDispositionCode": "TIC/TIM  -  Cancel / Change order"
          },
          {
            "display": " Order correction / Reprint",
            "fullDispositionCode": "TIC/TIM  -  Order correction / Reprint"
          },
          {
            "display": " Place order",
            "fullDispositionCode": "TIC/TIM  -  Place order"
          },
          {
            "display": " Questions",
            "fullDispositionCode": "TIC/TIM  -  Questions"
          },
          {
            "display": " Replace / Refund",
            "fullDispositionCode": "TIC/TIM  -  Replace / Refund"
          },
          {
            "display": " Status / Shipping / Expedite",
            "fullDispositionCode": "TIC/TIM  -  Status / Shipping / Expedite"
          }
        ]
      },
      {
        "display": "Website ",
        "nodes": [
          {
            "display": " Corrections or suggestions",
            "fullDispositionCode": "Website  -  Corrections or suggestions"
          },
          {
            "display": " Login issues",
            "fullDispositionCode": "Website  -  Login issues"
          },
          {
            "display": " System errors",
            "fullDispositionCode": "Website  -  System errors"
          }
        ]
      }
    ],
    "queue": "DSC.Proxi_ADF.EST_I"
  }

  constructor() { }

  getData() : Observable<any[]> {
    return of(this.data);
  }
}
