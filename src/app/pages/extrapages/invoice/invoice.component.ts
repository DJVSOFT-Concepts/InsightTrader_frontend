import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Invoice"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- Invoice Logo-->
            <div class="clearfix">
              <div class="float-start mb-3">
                <img
                  src="assets/images/logo-dark.png"
                  alt="dark logo"
                  height="22"
                />
              </div>
              <div class="float-end">
                <h4 class="m-0 d-print-none">Invoice</h4>
              </div>
            </div>

            <!-- Invoice Detail-->
            <div class="row">
              <div class="col-sm-6">
                <div class="float-end mt-3">
                  <p>
                    <b>Hello, {{ invoiceDetail.customer }}</b>
                  </p>
                  <p class="text-muted font-13">
                    {{ invoiceDetail.notes }}
                  </p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-sm-4 offset-sm-2">
                <div class="mt-3 float-sm-end">
                  <p class="font-13">
                    <strong>Order Date: </strong> &nbsp;&nbsp;&nbsp;
                    {{ invoiceDetail.order_date }}
                  </p>
                  <p class="font-13">
                    <strong>Order Status: </strong>
                    <span class="badge bg-success float-end">{{
                      invoiceDetail.order_status
                    }}</span>
                  </p>
                  <p class="font-13">
                    <strong>Order ID: </strong>
                    <span class="float-end">#{{ invoiceDetail.order_id }}</span>
                  </p>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row mt-4">
              <div class="col-sm-4">
                <h6>Billing Address</h6>
                <address>
                  {{ invoiceDetail.billing_address.line_1 }}<br />
                  {{ invoiceDetail.billing_address.line_2 }}<br />
                  {{ invoiceDetail.billing_address.city }},
                  {{ invoiceDetail.billing_address.state }}
                  {{ invoiceDetail.billing_address.zip }}<br />
                  <abbr title="Phone">P:</abbr>
                  {{ invoiceDetail.billing_address.phone }}
                </address>
              </div>
              <!-- end col-->

              <div class="col-sm-4">
                <h6>Shipping Address</h6>
                <address>
                  {{ invoiceDetail.shipping_address.line_1 }}<br />
                  {{ invoiceDetail.shipping_address.line_2 }}<br />
                  {{ invoiceDetail.shipping_address.city }},
                  {{ invoiceDetail.shipping_address.state }}
                  {{ invoiceDetail.shipping_address.zip }}<br />
                  <abbr title="Phone">P:</abbr>
                  {{ invoiceDetail.shipping_address.phone }}
                </address>
              </div>
              <!-- end col-->

              <div class="col-sm-4">
                <div class="text-sm-end">
                  <img
                    src="{{ invoiceDetail.order_barcode }}"
                    alt="barcode-image"
                    class="img-fluid me-2"
                  />
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table mt-4">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th class="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (item of invoiceDetail.items; track $index) {
                        <tr>
                          <td>{{ item.id }}</td>
                          <td>
                            <b>{{ item.name }}</b> <br />
                            {{ item.description }}
                          </td>
                          <td>{{ item.qty }}</td>
                          <td>{{ item.unit_cost }}</td>
                          <td class="text-end">{{ item.total }}</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
                <!-- end table-responsive-->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-sm-6">
                <div class="clearfix pt-3">
                  <h6 class="text-muted">Notes:</h6>
                  <small>
                    All accounts are to be paid within 7 days from receipt of
                    invoice. To be paid by cheque or credit card or direct
                    payment online. If account is not paid within 7 days the
                    credits details supplied as confirmation of work undertaken
                    will be charged the agreed quoted fee noted above.
                  </small>
                </div>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="float-end mt-3 mt-sm-0">
                  <p>
                    <b>Sub-total:</b>
                    <span class="float-end">{{ invoiceDetail.sub_total }}</span>
                  </p>
                  <p>
                    <b>VAT (12.5):</b>
                    <span class="float-end">{{ invoiceDetail.vat }}</span>
                  </p>
                  <h3>{{ invoiceDetail.total }} USD</h3>
                </div>
                <div class="clearfix"></div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row-->

            <div class="d-print-none mt-4">
              <div class="text-end">
                <a href="javascript:window.print()" class="btn btn-primary"
                  ><i class="mdi mdi-printer"></i> Print</a
                >
                <a href="javascript: void(0);" class="btn btn-info ms-1"
                  >Submit</a
                >
              </div>
            </div>
            <!-- end buttons -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class InvoiceComponent {
  invoiceDetail = {
    customer: 'Cooper Hobson',
    notes:
      'Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.',
    order_date: 'Jan 17, 2018',
    order_status: 'Paid',
    order_id: '123456',
    order_barcode: 'assets/images/barcode.png',
    billing_address: {
      line_1: 'Lynne K. Higby',
      line_2: '795 Folsom Ave, Suite 600',
      city: 'San Francisco',
      state: 'CA',
      zip: 94107,
      phone: '(123) 456-7890',
    },
    shipping_address: {
      line_1: 'Cooper Hobson',
      line_2: '795 Folsom Ave, Suite 600',
      city: 'San Francisco',
      state: 'CA',
      zip: 94107,
      phone: '(123) 456-7890',
    },
    items: [
      {
        id: 1,
        name: 'Laptop',
        description: 'Brand Model VGN-TXN27N/B 11.1" Notebook PC',
        qty: 1,
        unit_cost: '$1799.00',
        total: '$1799.00',
      },
      {
        id: 2,
        name: 'Warranty',
        description: 'Two Year Extended Warranty - Parts and Labor',
        qty: 3,
        unit_cost: '$499.00',
        total: '$1497.00',
      },
      {
        id: 3,
        name: 'LED',
        description: '80cm (32) HD Ready LED TV',
        qty: 2,
        unit_cost: '$412.00',
        total: '$824.00',
      },
    ],
    sub_total: '$4120.00',
    vat: '$515.00',
    total: '$4635.00',
  }
}
